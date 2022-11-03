package furama_managemrnt.repository.facilityRepository;

import furama_managemrnt.model.facility.FacilityType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IFacilityTypeRepository extends JpaRepository<FacilityType,Integer> {

}
