class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.references      :user,        index: true
      t.references      :ticket,      index: true
      t.string          :content
      
      t.timestamps      null: false
    end
  end
end
