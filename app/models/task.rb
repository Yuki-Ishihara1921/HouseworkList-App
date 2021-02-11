class Task < ApplicationRecord
  belongs_to :user, touch: true
end
