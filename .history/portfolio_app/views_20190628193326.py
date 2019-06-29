from django.shortcuts import render

# Create your views here.
def index(request):
    """The homepage for Learning Log."""
    return render(request, 'brandon_portfolio/index.html')