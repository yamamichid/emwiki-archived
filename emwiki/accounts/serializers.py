from .models import User
from rest_framework import serializers


class UserSerializer(serializers.Serializer):
    class Meta:
        model = User
        fields = ['username', 'email', ]

    def has_object_permission(self, request, view, obj):
        """Custom permission https://www.django-rest-framework.org/api-guide/permissions/#custom-permissions

        Args:
            request ([type]): [description]
            view ([type]): [description]
            obj ([type]): [description]
        """
        return request.user.pk == obj.pk
