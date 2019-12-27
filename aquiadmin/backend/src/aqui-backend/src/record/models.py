from django.db import models

class Record(models.Model):
    class_name = models.CharField(max_length=40,default="None")
    class_id = models.CharField(max_length=10,default="None")
    instructor = models.CharField(max_length=30,default="None")

    def __str__(self):
        return self.class_name
'''
class Student(models.Model):
    class_enrolled = models.ForeignKey(AttendanceRecord, on_delete=models.CASCADE)
    student_name = models.CharField(max_length=50)
    present_count = models.IntegerField(default=0)

    def __str__(self):
        return self.student_name
'''