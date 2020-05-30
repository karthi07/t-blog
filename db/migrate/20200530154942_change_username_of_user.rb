class ChangeUsernameOfUser < ActiveRecord::Migration[6.0]
  def change
    change_column_null :users, :username, false
    change_column_default :users, :username, ""
  end
end
