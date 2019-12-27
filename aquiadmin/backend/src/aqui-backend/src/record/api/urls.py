from django.urls import path, include

from .views import RecordDetailView,RecordListView

urlpatterns = [
    path('',RecordListView.as_view()),
    path('<pk>',RecordDetailView.as_view())
]