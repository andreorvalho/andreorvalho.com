source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.0', '>= 5.0.0.1'
# Use Puma as the app server
gem 'puma', '~> 3.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0', '>= 3.2'
# Use jquery as the JavaScript library
gem 'jquery-rails'

# database

# Use postgresql as the database for Active Record
gem "pg"

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  # Use guard for automated testing
  gem "guard-rspec"
  # Detects file changes in Mac OS X
  gem "rb-fsevent"
  # Testing framework
  gem "rspec-rails"
  # Keeps the testing database clean
  gem "database_cleaner"
  # Create testing data with Factory Girl
  gem "factory_girl_rails"
  # Adding rspec to the spring commands set, to improve speed
  gem "spring-commands-rspec"
  # It allows to see objects easier on the console
  gem "awesome_print"
  # Adds the rails panel to the chrome inspect option
  gem 'meta_request'
  # This will show the errors in a easier way
  gem "better_errors"
  # start the processes
  gem "foreman"
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
