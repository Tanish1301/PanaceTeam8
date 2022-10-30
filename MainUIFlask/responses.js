function getBotResponse(put) {
    input=put.toLowerCase()
   
    if (input.includes("hello")){
        return "Hello there!";
    } else if (input.includes("goodbye")) {
        return "Talk to you later!";
    } else if (input.includes("infra")){
        return "It is one of the most important factor in determining happiness of the students. Students can learn better and understand better if they are provided with better infrastructure.";
    } else if (input.includes("academics")){
        return "Academic achievement is one of the most important indicators to assess progress in education and it is the only goal for the entire educational system to achieve.";
        
    } else if (input.includes("health")){
        return "Health and happiness have a mutual influence, and the presence of disease affects abstract emotions such as happiness.";
        
    } else if (input.includes("increase")){
        return "To boost your happiness increase your performance in all domain.For more information contact your mentor."
    } else if(input.includes("psycho")){
        return "Psychological domain is one of the most important domain , it mainly deals with your mental health."
    }else if(input.includes("complaint")){
        return "If you want to rise any complaints please do mail to SIH2022@gmail.com"
    }else if(input.includes("sport")){
        return "It is an important domain which includes information about your physical activity"
    }else if(input.includes("culture")){
        return "It gives an important domain which gives information about your cultural activities."
    }else if(input.includes("admin")){
        return "It is an important domain which gives information about your educational institution administration."
    }else if(input.includes("no1")){
        return " AYYAGARE NO.1 "
    }else{
        return "Try asking something else!";
    }


}

