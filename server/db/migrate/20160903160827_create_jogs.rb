class CreateJogs < ActiveRecord::Migration
  def change
    create_table :jogs do |t|
      t.references :user, index: true, null: false
      t.date :date, null: false
      t.float :distance, null: false
      t.integer :duration, null: false

      t.timestamps
    end
  end
end
