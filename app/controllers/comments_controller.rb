class CommentsController < ApplicationController
	def create
		@snippet = Snippet.find(params[:snippet_id])
		@comment  = @snippet.comments.create(comment_params)
		redirect_to snippet_path(@snippet)
	end

	def destroy
		@snippet = Snippet.find(params[:snippet_id])
		@comment = @snippet.comments.find(params[:id])
		@comment.destroy
		redirect_to snippet_path(@snippet)
	end

	private
	def comment_params
		params.require(:comment).permit(:commenter, :body)
	end
end
