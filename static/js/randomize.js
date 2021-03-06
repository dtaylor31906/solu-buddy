/**
 * Author: William Robert Howerton III
 */


/**
 * Makes a random double between given low and high
 * @param low Minimum value of expected double
 * @param high Maximum value of expected double
 * @returns {*} Random double within limits
 */
function random_double(low, high){
    return precise_round((Math.random() * (high-low))+low, 4);
}

/**
 * Makes a random integer between given low and high
 * @param low Minimum value of expected integer
 * @param high Maximum value of expected integer
 * @returns {*} Random integer within limits.
 */
function random_int(low, high){
    return (Math.floor(Math.random() * (high-low))+low);
}

/**
 * Makes a random lower case character.
 * @returns {string} Random lower case character.
 */
function random_lower(){
    return String.fromCharCode(random_int(97, 122));
}

/**
 * Makes a random upper case character
 * @returns {string} random upper case character
 */
function random_upper(){
    return String.fromCharCode(random_int(65, 90));
}

/**
 * Simulates rolling dice by making a random number between 0 and the given max and then comparing the number to "chances".
 * If The generated number is lower than the chances, the roll "succeeeds" and true is returned. False is returned if the
 * roll fails. Chance is approximately (chances/max)%
 * @param chances Approximate chances out of max to succeed.
 * @param max Upper limit of the roll.
 * @returns {boolean} True if success, false otherwise.
 */
function roll_dice(chances, max){
    return (random_double(0, max) < chances);
}

/**
 * Creates a random valid formula using random elements. Length will be between given low and high.
 * @param low Minimum length
 * @param high Maximum length
 * @returns {string} Valid formula
 */
function random_formula(low, high){
    var length = random_int(low, high);

    var formula = "";

    if(roll_dice(50, 100)){
        formula += random_int(2, 1000);
    }

    for(var i = 0; i < length; i++){

        formula += getRandomElementKey();

        if(roll_dice(50, 100)){
            formula += random_int(2, 99);
        }
        i = formula.length;
    }

    return formula;
}


function random_formula_w_ionic(chance_for_ionic, low, high){
    var length = random_int(low, high);

    var formula = "";

    if(roll_dice(50, 100)){
        formula += random_int(2, 1000);
    }
    for(var i = 0; i < length; i++){
        formula += getRandomElementKey();

        if(roll_dice(50, 100)){
            formula += random_int(2, 100);
        }

        if(roll_dice(chance_for_ionic, 100)){
            formula += random_ionic_formula(1,20);
        }
    }

    return formula;
}

/**
 * Creates a random valid ionic formula using random elements. Length will be between given low and high.
 * @param low Minimum length
 * @param high Maximum length
 * @returns {string} Valid formula
 */
function random_ionic_formula(low, high){
    var length = random_int(low, high);

    var formula = "(";
    for(var i = 0; i < length; i++){
        formula += getRandomElementKey();
        if(roll_dice(50, 100)){
            formula += random_int(2, 100);
        }
    }
    formula += ")";

    if(roll_dice(20, 100)){
        formula += random_int(2, 999);
    }

    return formula;
}

/**
 * Creates a random word between the given min and max length using lower and upper case letters.
 * @param min_length minimum length
 * @param max_length maximum length
 * @returns {string} Word
 */
function random_word(min_length, max_length){
    var length = random_int(min_length, max_length);
    var word = "";
    for(var i = 0; i < length; i++){
        if(roll_dice(50, 100)){
            word += random_upper();
        }else{
            word += random_lower();
        }
    }
    return word;
}

function random_choose(val1, val2){
    if(roll_dice(50, 100)){
        return val1;
    }else{
        return val2;
    }
}

function random_valid_field_val(field, solute){

    //Gets last and most specific class per field.
    var interesting_class = Field_To_Type(field)[Field_To_Type(field).length - 1];

    var random_valid_field_vals = {

        'number' : function(){
            return random_double(limits['number'].low, limits['number'].high);
        },

        'string' : function(){
            return random_word(limits['string'].low, limits['string'].high);
        },

        'compound' : function(){
            return solute;
        },

        'sm_volume' : function(){
            return random_double(limits['sm_volume'].low, limits['sm_volume'].high);
        },

        'lrg_volume' : function(){
            return random_double(limits['lrg_volume'].low, limits['lrg_volume'].high);
        },

        'percent' : function(){
            return random_double(limits['percent'].low, limits['percent'].high);
        },

        'mweight' : function(solute){
            var compound = string_to_compound(solute);
            return (compound != null)? compound.molecular_weight() : null;
        },

        'iterations' : function(){
            return random_int(limits['iterations'].low, limits['iterations'].high);
        }
    };

    return random_valid_field_vals[interesting_class](solute);
}