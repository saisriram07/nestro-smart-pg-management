from django.db.models import Sum

from rest_framework.views import APIView
from rest_framework.response import Response

from properties.models import (
    Property,
    Building,
    Room,
    Bed,
)

from tenants.models import Tenant

from payments.models import Payment


class DashboardAPIView(APIView):

    def get(self, request):

        # Property Statistics
        total_properties = Property.objects.count()
        total_buildings = Building.objects.count()
        total_rooms = Room.objects.count()
        total_beds = Bed.objects.count()

        occupied_beds = Bed.objects.filter(
            is_occupied=True
        ).count()

        vacant_beds = Bed.objects.filter(
            is_occupied=False
        ).count()

        total_tenants = Tenant.objects.count()

        # Payment Statistics
        total_payments = Payment.objects.count()

        paid_payments = Payment.objects.filter(
            payment_status="Paid"
        ).count()

        pending_payments = Payment.objects.filter(
            payment_status="Pending"
        ).count()

        total_revenue = Payment.objects.filter(
            payment_status="Paid"
        ).aggregate(
            total=Sum("amount")
        )["total"] or 0

        return Response({

            # Property Analytics
            "total_properties": total_properties,
            "total_buildings": total_buildings,
            "total_rooms": total_rooms,
            "total_beds": total_beds,
            "occupied_beds": occupied_beds,
            "vacant_beds": vacant_beds,
            "total_tenants": total_tenants,

            # Payment Analytics
            "total_payments": total_payments,
            "paid_payments": paid_payments,
            "pending_payments": pending_payments,
            "total_revenue": total_revenue,

        })