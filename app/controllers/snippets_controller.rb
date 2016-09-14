class SnippetsController < ApplicationController
	def new
	end

	def create
		render plain: params[:snippet].inspect
	end
end
