# Generated by Django 4.2.4 on 2023-08-17 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0002_examdetails'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='examdetails',
            options={},
        ),
        migrations.AddField(
            model_name='examdetails',
            name='percentage',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]