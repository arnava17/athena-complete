package com.barclays.model;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * Created by RNagmoti on 1/4/2017.
 */
@Component
public class FunctionalAreaSummary {

    private Map<String, StatusCount> functionalAreaStatusCount;

    List<StatusCount> statusCountArrayList = new ArrayList<StatusCount>();
    public Map<String, StatusCount> getFunctionalAreaStatusCount() {

        return functionalAreaStatusCount;
    }

    public void setFunctionalAreaStatusCount(Map<String, StatusCount> functionalAreaStatusCount) {
        this.functionalAreaStatusCount = functionalAreaStatusCount;
    }

    public List<StatusCount> getFunctionalAreaStatusCountArrayList(){

        Iterator it = functionalAreaStatusCount.entrySet().iterator();
        while(it.hasNext()){
            Map.Entry pair = (Map.Entry)it.next();
            statusCountArrayList.add((StatusCount) pair.getValue());
        }
        return statusCountArrayList;
    }
}
