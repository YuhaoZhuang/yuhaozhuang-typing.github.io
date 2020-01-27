window.addEventListener('load', init);

var inputted_words = [];
var correct_words = [];

var words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'joke',
  'hero',
  'revolver',
  'echo',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition', 'first', 'us', 'know', 'seem', 'its', 'don\'t', 'river', 'new', 'miss', 'left', 'under', 'Indian', 'last', 'small', 'leave', 'they',
    'call', 'three', 'do', 'see', 'face', 'turn', 'life', 'very', 'we', 'face', 'with', 'own', 'us', 'near'
];

var game ={output: [],  count: 0, correct:0, playing: false};

function init(){
    showWords(words);
}
  
function showWords(array){
    var len =0;
    while (len < 116){
        var index = Math.floor(Math.random() * array.length);
        game.output.push(array[index]);
        len += array[index].length+1;
    }
    if (len > 128){
        game.output.pop();
    }
    document.getElementById('current_word').innerHTML = game.output.join(" ");
}

function start_timer(){
    if (game.playing == false){
        game.playing == true;
        setInterval(Calculate, 60000);
    }
}

function compare(event){
    if (event.key == " "){
        var x = removeSpaces(document.getElementById("word_input").value);
        var word = game.output[game.count];
        inputted_words.push(x);
        correct_words.push(word);
        if (x == word){
            game.correct+=1;
        }
        game.count+=1;
        document.getElementById('word_input').value ="";
        if (game.count == (game.output).length){
            game.count = 0;
            game.output = [];
            showWords(words);
        }
    } 
}

function Calculate(){
    document.getElementById('word_input').value = "";
    document.getElementById('result').innerHTML = game.correct;
    document.getElementById('word_input').disabled = true;
    //document.getElementById('word_input').readOnly = true;
    /*
    document.getElementById('entered').innerHTML = inputted_words;
    document.getElementById('correct').innerHTML = correct_words;
    */
}


function removeSpaces(val) {
   return val.split(' ').join('');
}

    
