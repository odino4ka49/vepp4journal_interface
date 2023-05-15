from django.db import models
import epics

def getPvs(pvs):
    pv_dict = {}
    for pv_name in pvs:
        pv_dict[pv_name] = epics.caget(pv_name)
        if(str(type(pv_dict[pv_name]))=="<class 'epics.dbr.c_float_Array_54'>"):
            pv_dict[pv_name] = list(pv_dict[pv_name])
    #print(pv_dict)
    return pv_dict