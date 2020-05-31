class ChangetblName < ActiveRecord::Migration[6.0]
  def change
    rename_table :jwt_blacklists, :jwt_blacklist
  end
end
