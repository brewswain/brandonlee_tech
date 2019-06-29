from django.shortcuts import render

# Create your views here.
def index(request):
    """The homepage for Brandon's Portfolio."""
    return render(request, 'portfolio_app/index.html')