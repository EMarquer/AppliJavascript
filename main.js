//(function(){
	var nbObstacle = 8;
	var nbBonus = 8;
	var taille = 6;

	class Plateau{
		constructor(){
			this.cases=new Array();
			for (var i = 0; i < taille; i++) {
				this.cases[i]=new Array();
				for (var j = 0; j < taille; j++) {
					this.cases[i][j]=0;//valeur va etre 0 pour une case vide, 1 pour un heros, 2 pour une princesse, 3 pour un bonus, 4 pour un obstacle
				}
			}
		}

		init(){

		}


		/** creates HTML Node
		 * Returns the html pseudo-table corresponding to the current Plateau state
		 */
		toHtmlNode() {
			var table,
				line,
				cell,
				subCell;

			table = document.createElement("SECTION");
			table.id = "plateau";
			
			for (var i = 0; i < taille; i++) {
				line=document.createElement("DIV");
				line.className = "ligne";
				
				for (var j = 0; j < taille; j++) {
					cell=document.createElement("DIV");
					cell.className = "case";

					switch (this.cases[i][j]){
						case 1: // if the cell contains the hero
							subCell = document.createElement("DIV");
							subCell.id = "hero";
							cell.appendChild(subCell);
							break;

						case 2: // if the cell contains the princess
							subCell = document.createElement("DIV");
							subCell.id = "princesse";
							cell.appendChild(subCell);
							break;

						case 3: // if the cell contains a bonus
							subCell = document.createElement("DIV");
							subCell.className = "bonus";
							cell.appendChild(subCell);
							break;

						case 4: // if the cell contains an obstacle
							subCell = document.createElement("DIV");
							subCell.className = "obstacle";
							cell.appendChild(subCell);
							break;
					}
					line.appendChild(cell);
				}
				table.appendChild(line);
			}

			return table;
		}

		update() {
			plateau=document.getElementById("plateau");
			plateau.parentNode.replaceChild(this.toHtmlNode(), plateau);
		}


	}

	function setMessage(titre, contenu) {

		var aside = document.createElement("ASIDE"),
			title = document.createElement("H2"),
			content = document.createElement("P");

		title.innerHTML = titre;
		content.innerHTML = contenu;
		aside.id = "text";
		aside.appendChild(title);
		aside.appendChild(content);

		var currentAside = document.getElementById("text");
		currentAside.parentNode.replaceChild(aside, currentAside);// = aside;
	}

	/** test Plateau.update()
	 * only for debug use
	 */
	function testUpdate() {
		var plateau = new Plateau();
		plateau.cases[5][4]=1;
		plateau.cases[0][2]=2;
		plateau.cases[4][4]=4;
		plateau.cases[3][2]=4;
		plateau.cases[0][4]=4;

		plateau.update();

		plateau.cases[3][4]=3;
		plateau.cases[4][2]=3;
		plateau.cases[0][3]=3;

		plateau.update();
	}

	/** test setMessage()
	 * only for debug use
	 */
	function testSetMessage() {
		setMessage("lol, it's not even funny","blabla blabla blablablabla blabla blablabla blablabla")
	}

	testUpdate();
	testSetMessage();




//})();