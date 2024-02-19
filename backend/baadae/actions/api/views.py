from rest_framework.response import Response
from rest_framework.decorators import api_view
from actions.models import Action
from django.contrib.auth.models import User
from .serializers import ActionSerializers


@api_view(['GET'])
def get_actions(request, pk):
    user = User.objects.get(id=pk)
    actions = Action.objects.exclude(user=pk)
    following_ids = user.following.values_list('id', flat=True)
    if following_ids:
        actions = actions.filter(user_id__in=following_ids)
    actions = actions.select_related('user',
                                     'user__profile'
                                     ).prefetch_related('target')[:10]
    res = ActionSerializers(actions, many=True)
    return Response(res.data)
