from django.db import models
import epics

def getPvs(pvs):
    pv_dict = {}
    for pv_name in pvs:
        pv_dict[pv_name] = epics.caget(pv_name)
        print(isinstance(pv_dict[pv_name],epics.dbr.c_float_Array_54))
    #print(pv_dict)
    return pv_dict