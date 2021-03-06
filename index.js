
    // propriedades

    var saidaSaldo = document.getElementById("saldo");
    var saidaExtrato = document.getElementById("extrato");
    var valorHTML = document.getElementById("valor");
    
    function dataCurta() {

        var data = new Date();

        var d = data.getDate();
        var m = data.getMonth()+1; 
        var a = data.getFullYear();
        var h = data.getHours();
        var min = data.getMinutes();
        
        if (d.toString.lenght==1) {
            d = "0" + d;
        }

        if(m.toString.lenght==1) {
            m = "0" + m;
        }

        if(h.toString.lenght==1) {
            h = "0" + h;
        }

        if(min.toString.lenght==1) {
            min = "0" + min;
        }

        return d + "/" + m + "/" + a + " - " + h + ":" + min;

    }

    var poupanca = {
        saldo: 0,
        movimentacao: [],
    
        // métodos: //
    
        depositar: function() {
            
            var valor = Number(valorHTML.value);

            this.saldo += valor;
            saidaSaldo.innerHTML = "R$ " + this.saldo.toFixed(2);
            this.movimentacao.push(dataCurta() + ": + R$ " + valor.toFixed(2));
            valorHTML.value = "";
        },
           
        sacar: function() {

            // PERMITE QUE O SALDO SEJA NEGATIVO this.saldo -= Number (valorHTML.value);//
            //saidaSaldo.innerHTML = this.saldo;//    

            var valor = Number(valorHTML.value);
           
            if (valor>this.saldo) {
                alert("Saldo insuficiente");
            
            } else {
                this.saldo -= valor;
                this.movimentacao.push(dataCurta() + ": - R$ " + valor.toFixed(2));
            }
            saidaSaldo.innerHTML = "R$ " + this.saldo.toFixed(2);
            valorHTML.value  = "";
        },
        
        exibirExtrato: function() {

            saidaExtrato.innerHTML = "Extrato: <br>";
            for(i=0; i<=this.movimentacao.length-1; i++) {
                saidaExtrato.innerHTML += this.movimentacao[i] + "<br>";
            }
        }
    
    }

