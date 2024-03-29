# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160903185157) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "jogs", force: true do |t|
    t.integer  "user_id",    null: false
    t.date     "date",       null: false
    t.float    "distance",   null: false
    t.integer  "duration",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "jogs", ["user_id"], name: "index_jogs_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "email",                           default: "", null: false
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                   default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.string   "name",                                         null: false
    t.string   "image"
    t.string   "provider",                                     null: false
    t.string   "uid"
    t.integer  "role",                            default: 1,  null: false
    t.string   "authentication_token", limit: 30
  end

  add_index "users", ["authentication_token"], name: "index_users_on_authentication_token", unique: true, using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end
