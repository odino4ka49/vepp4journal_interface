from django.db import models
import epics

def getPvs(pvs):
    pv_dict = {}
    for pv_name in pvs:
        pv_dict[pv_name] = epics.caget(pv_name)
    print(pv_dict)
    return pv_dict