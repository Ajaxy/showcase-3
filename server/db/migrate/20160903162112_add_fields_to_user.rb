class AddFieldsToUser < ActiveRecord::Migration
  def change
    add_column :users, :name, :string, null: false
    add_column :users, :image, :string
    add_column :users, :provider, :string, index: true, null: false
    add_column :users, :uid, :string, index: true
    add_column :users, :role, :integer, index: true, null: false, default: 1
  end
end
