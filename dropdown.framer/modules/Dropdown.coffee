# Dropdown function
exports.Dropdown = (layerA, layerB, layerAbgColour, updateSelector) ->
	
	# Reset the cursor to normal
	document.body.style.cursor = "auto"
	
	defaultColour = layerA.backgroundColor.color

	if layerB.visible
		layerB.visible = false
	
	# Mouse Hover
	layerA.style = 
		"cursor": "pointer"

	layerA.onMouseOver -> 

		if layerAbgColour == undefined
			layerA.backgroundColor = defaultColour
		else 
	  	layerA.backgroundColor = layerAbgColour	

		# Instantly switch to the state 
		layerA.onMouseOut ->
		  layerA.backgroundColor = defaultColour

	# Show or hide its menu		
	layerA.onClick ->			

		if layerB.visible
			layerB.visible = false
		else
			layerB.visible = true

		layerB.opacity = 1   

		# For each menu option
		for option, i in layerB.children
			if updateSelector == true
				# When it's clicked
				layerB.children[i].onClick (event, layer) ->
					# Show the selected option in the drop down
					layerA.selectChild("text").text = layer.text

			# Update the cursor on hover
			layerB.children[i].style = 
				"cursor": "pointer"

			# Close modal after selection	
			layerB.children[i].onClick ->
				layerB.visible = false
				