class LinksController < ApplicationController

  before_filter :load

  def load
    @links = Link.all
    @link = Link.new
  end

  def index
  end
  
  def create
    @link = Link.new(params[:link])

    if @link.save
      flash[:notice] = "Successfully created link."
      @links = Link.all
    end
  end

  def destroy
    @link = Link.find(params[:id])
    @link.destroy
    flash[:notice] = "Successfully destroyed link."
    @links = Link.all
  end
end
