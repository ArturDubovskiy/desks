class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.integer :priority
      t.boolean :isDone, :default => false
      t.references :desk, null: false, foreign_key: true

      t.timestamps
    end
  end
end
