class SnippetsController < ApplicationController
	def index
		@snippets = Snippet.all
		@new_snippet_link = new_snippet_path
		render react_component: 'snippets', props: { snippets: @snippets,
                                                     new_snippet_link: @new_snippet_link }
	end

	def show
		@snippet = Snippet.find(params[:id])
	end

	def new
		@snippet = Snippet.new
		# render 'new'
		render react_component: 'new_snippet', props: { snippet_index_link: snippets_path}
	end

	def edit
		@snippet = Snippet.find(params[:id])
	end

	def create
		@snippet = Snippet.new(snippet_params)

		if @snippet.save
			redirect_to @snippet
		else
			render 'new'
		end
	end

	def update
		@snippet = Snippet.find(params[:id])

		if @snippet.update(snippet_params)
			redirect_to @snippet
		else
			render 'edit'
		end
	end

	def destroy
		@snippet = Snippet.find(params[:id])
		@snippet.destroy
		redirect_to snippets_path
	end

	private
		def snippet_params
			params.require(:snippet).permit(:title, :text)
		end
end
