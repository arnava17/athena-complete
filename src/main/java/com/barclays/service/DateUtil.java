package com.barclays.service;

import java.util.Date;

/**
 * Created by RNagmoti on 1/18/2017.
 */
public class DateUtil {

    public static Long getDateTimeInEpoch(Date date) {
        Long epochDateTime;
        epochDateTime = date.getTime();
        return epochDateTime;
    }
}