from rest_framework.generics import ListAPIView, RetrieveAPIView
from record.models import Record
from .serializers import RecordSerializer

class RecordListView(ListAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer

class RecordDetailView(RetrieveAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer