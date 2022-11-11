# from plates.models import Plate

# class OverwritePerformCreateMixin:
#     def perform_create(self, serializer):
#         get_plate = self.request.data.pop("plate")
#         new_plate, _ = Plate.objects.get_or_create(number=get_plate)
#         serializer.save(plate=new_plate)

# class OverwritePerformUpdateMixin:
#     def perform_update(self, serializer):
#         ...
