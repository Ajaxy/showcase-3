class Jog < ActiveRecord::Base
  belongs_to :user
  acts_as_api

  api_accessible :v1_default do |t|
    t.add :id
    t.add :date
    t.add :duration
    t.add :distance
    t.add :avg_speed
  end

  validates :distance, numericality: { greater_than_or_equal_to: 0.1 }
  validates :duration, numericality: { greater_than_or_equal_to: 1 }

  def avg_speed
    (distance.to_f / duration * 60).round(2)
  end
end
