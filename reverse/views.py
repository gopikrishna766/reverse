from django.shortcuts import render
from django.http import HttpResponse 
# Create your views here.
def home(request):
	return render(request, 'reverse/home.html')



def rever(request):
	source = request.POST['source']
	a = ""
	if source <= 1:
		return HttpResponse (source)
	else:    
		for i in range(len(source)):
			a = a+source[-(i+1)]
	return HttpResponse (a)   
