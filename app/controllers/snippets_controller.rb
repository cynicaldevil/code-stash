class SnippetsController < ApplicationController
	def show
		@snippet = Snippet.find(params[:id])
	end

	def new
	end

	def create
		render plain: params[:snippet].inspect
	end
end
