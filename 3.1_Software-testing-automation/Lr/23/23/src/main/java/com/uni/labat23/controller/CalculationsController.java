package com.uni.labat23.controller;
import com.uni.labat23.entity.Calculations;
import com.uni.labat23.entity.models.NumberDate;
import com.uni.labat23.entity.models.Numbers;
import com.uni.labat23.entity.models.NumbersDTO;
import com.uni.labat23.entity.models.enums.OperationsEnum;
import com.uni.labat23.repository.CalculationsRepository;
import com.uni.labat23.service.CalculationsService;
import com.uni.labat23.service.OperationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RequestMapping(value = "/calculations")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CalculationsController {

    private CalculationsService calculationsService;

    private CalculationsRepository calculationsRepository;

    private OperationsService operationsService;
    public CalculationsController(CalculationsService calculationsService, OperationsService operationsService) {
        this.calculationsService = calculationsService;
        this.operationsService = operationsService;
    }


    @Autowired
    public void setCalculationsService(CalculationsService calculationsService) {
        this.calculationsService = calculationsService;
    }

    @Autowired
    public void setCalculationsRepository(CalculationsRepository calculationsRepository) {
        this.calculationsRepository = calculationsRepository;
    }

    @Autowired
    public void setOperationsService(OperationsService operationsService) {
        this.operationsService = operationsService;
    }

    @GetMapping(path = "/addition")
    public double getAddition(Numbers numbers) {
        System.out.println("getAddition");
        System.out.println(numbers);
        this.calculationsService.createRecordToDatabase(numbers, OperationsEnum.ADDITION);
        return OperationsService.calculate(numbers, '+');
    }

    @GetMapping(path = "/subtraction")
    public double getSubtraction(Numbers numbers) {
        System.out.println("getSubtraction");
        this.calculationsService.createRecordToDatabase(numbers, OperationsEnum.SUBTRACTION);
        return OperationsService.calculate(numbers, '-');
    }

    @GetMapping(path = "/division")
    public double getDivision(Numbers numbers) {
        System.out.println("getDivision");
        this.calculationsService.createRecordToDatabase(numbers, OperationsEnum.DIVISION);
        return OperationsService.calculate(numbers, '/');
    }

    @GetMapping(path = "/multiplication")
    public double getMultiplication(Numbers numbers) {
        System.out.println("getMultiplication");
        this.calculationsService.createRecordToDatabase(numbers, OperationsEnum.MULTIPLICATION);
        return OperationsService.calculate(numbers, '*');
    }

    @GetMapping(path = "/findByParameters")
    public List<Calculations> findByParameters(NumbersDTO numbersDTO) {
        return calculationsRepository.findByParameters(numbersDTO.getNumberSystemOne(), numbersDTO.getNumberSystemTwo(), numbersDTO.getOperationName(), numbersDTO.getStartDate(), numbersDTO.getEndDate());
    }

    @GetMapping(path = "/findByDate")
    public List<Calculations> findByDate(NumberDate number) {
        return calculationsRepository.findByDate(number.getStartDate(), number.getEndDate());
    }
}
