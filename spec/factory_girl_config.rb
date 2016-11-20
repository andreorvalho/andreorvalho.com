require 'factory_girl'

RSpec.configure do |config|
  # Include factory girl syntax methods so you can write create(:article), or build(:profile)
  config.include FactoryGirl::Syntax::Methods
end
