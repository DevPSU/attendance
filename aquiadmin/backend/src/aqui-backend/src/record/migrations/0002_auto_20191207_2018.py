# Generated by Django 3.0 on 2019-12-07 20:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('record', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='record',
            name='instructor',
            field=models.CharField(default='None', max_length=30),
        ),
        migrations.AlterField(
            model_name='record',
            name='class_id',
            field=models.CharField(default='None', max_length=10),
        ),
    ]
