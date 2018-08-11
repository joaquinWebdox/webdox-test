class CreateTickets < ActiveRecord::Migration[5.0]
  def change
    create_table :tickets do |t|
      t.string        :title
      t.text          :description
      t.integer       :user_assigned_id,   index: true
      t.integer       :user_owned_id,      index: true
      t.string        :status,             default: 'open'

      t.timestamps     null: false
    end
  end
end
