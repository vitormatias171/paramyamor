function sim (){
    alert ("EU TE AMO VITORINHA E SEMPRE SERA VOCE A MINHA PESSOA FAVORITA, VOU REPETIR ISSO TODOS OS ANOS QUE PASSARMOS JUNTOS!.")
        }
    
        function desviar(t) {
            var btn =t;
          btn.style.position = 'absolute';
          btn.style.bottom = geraposicao (1 , 95);
          btn.style.left = geraposicao (1 , 95);
            console.log('opa, negativo');
            
        }
        
        function geraposicao(min, max) {
      return Math.random() * (max - min) + min + '%';
    }    