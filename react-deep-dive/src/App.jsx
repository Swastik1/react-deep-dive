import React, { useState } from 'react'
import { initialTravelPlan } from './places'

const TravelPlan = () => {
  const [plan,setPlan] = useState(initialTravelPlan);
  
  const handleComplete = (parentId,childId) => {
    const parent = plan[parentId];
    const nextParent = {
      ...plan,
      childIds: parent.childIds.filter(id => id !== childId)
    }
    setPlan({
      ...plan,
      [parentId]: nextParent
    })
  }

  const root = plan[0];
  const planetIds = root.childIds;

  return (
    <div>
      <h2>Places to visit:</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree 
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </div>
  )
}

const PlaceTree = ({id,parentId,placesById,onComplete}) => {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      <button onClick={() => onComplete(parentId,id)}>Complete</button>
      {childIds.length > 0 && 
        <ol>{childIds.map(childId => (
          <PlaceTree 
            key={id}
            id={childId}
            parentId={id}
            placesById={placesById}
            onComplete={onComplete}
          />
        ))}</ol>
      }
    </li>
  )
}

export default TravelPlan