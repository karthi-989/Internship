# Generated by Django 4.2.4 on 2023-08-25 10:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_react_total'),
    ]

    operations = [
        migrations.AddField(
            model_name='react',
            name='Description',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]
