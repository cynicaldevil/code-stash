class SnippetsController < ApplicationController
	def show
		@snippet = Snippet.find(params[:id])
	end

	def new
	end

	def create
		@snippet = Snippet.new(snippet_params)
		@snippet.save
		redirect_to @snippet
	end

	private
		def snippet_params
			params.require(:snippet).permit(:title, :text)
		end
end
