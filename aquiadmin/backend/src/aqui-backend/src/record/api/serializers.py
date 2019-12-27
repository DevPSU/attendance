from rest_framework import serializers
from record.models import Record

class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = ('class_name','class_id','instructor')