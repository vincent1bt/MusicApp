require 'net/http'
require 'openssl'

require 'json'
require 'sinatra'
require "base64"

set :public_folder, File.dirname(__FILE__) + '/assets'
set :views, settings.root + '/templates'

$token = {
  code: nil,
  life: 0
}

def post_request(uri, header)
  return Net::HTTP::Post.new(uri, header)
end

def get_request(uri, header)
  return Net::HTTP::Get.new(uri, header)
end

def check_token()
  if !$token["code"] || $token["life"] <= Time.now
    $token["code"] = get_token()
    $token["life"] = Time.now + 3600
  end
  puts $token["code"]
  return $token["code"]
end

def make_request(url, header, params = {})
  uri = URI.parse(url)

  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true

  request = yield(uri.request_uri, header)

  request.body = URI.encode_www_form(params)

  response = http.request(request)

  return JSON.parse(response.body)
end

def get_token()
  client_code = Base64.strict_encode64("#{ENV["SP_CLIENT_ID"]}:#{ENV["SP_CLIENT_SECRET"]}")
  url = "https://accounts.spotify.com/api/token"
  header = { "Authorization" => "Basic #{client_code}" }
  params = { grant_type: "client_credentials" }

  response = make_request(url, header, params) { |uri, header| post_request(uri, header) }

  return response["access_token"]
end

def get_new_songs()
  token = check_token()
  url = "https://api.spotify.com/v1/browse/new-releases?limit=8"
  header = { "Authorization" => "Bearer #{token}" }
  response = make_request(url, header ) { |uri, header| get_request(uri, header) }
  return response
end

def search_artist(artist)
  token = check_token()
  url = "https://api.spotify.com/v1/search?q=#{artist}&type=artist&limit=3"
  header = { "Authorization" => "Bearer #{token}" }
  response = make_request(url, header) { |uri, header| get_request(uri, header) }
  return response
end

def get_artist_top_tracks(id)
  token = check_token()
  url = "https://api.spotify.com/v1/artists/#{id}/top-tracks?country=MX"
  header = { "Authorization" => "Bearer #{token}" }
  response = make_request(url, header) { |uri, header| get_request(uri, header) }
  return response
end

def get_artist_albums(id)
  token = check_token()
  url = "https://api.spotify.com/v1/artists/#{id}/albums"
  header = { "Authorization" => "Bearer #{token}" }
  response = make_request(url, header) { |uri, header| get_request(uri, header) }
  return response
end

get '/new' do
  content_type :json

  news = get_new_songs()
  news.to_json
end

get '/artist/albums/:id' do
  content_type :json

  id = params[:id]
  albums = get_artist_albums(id)
  albums.to_json
end

get '/artist/:name' do
  content_type :json

  name = params[:name]
  artists = search_artist(name)
  artists.to_json
end

get '/artist/top/:id' do
  id = params[:id]
  content_type :json

  tracks = get_artist_top_tracks(id)
  tracks.to_json
end

get '/' do
  erb :index
end
