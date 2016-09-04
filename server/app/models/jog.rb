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

  def avg_speed
    (distance.to_f / duration * 60).round(2)
  end
end
