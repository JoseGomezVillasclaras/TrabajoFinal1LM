<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
		
		<xsl:template match="/">
	<html><head><link rel="stylesheet" type="text/css" href="soldadito.css" /></head><body>
      <xsl:apply-templates />
    </body></html>
  </xsl:template>
		<xsl:template match="tipo">
			
		</xsl:template>
			<xsl:template name="headerTemplate">
    <div class="contenedorBarra">
      <a href="https://josegomezvillasclaras.github.io/TrabajoFinal1LM/Index.html" class="btn">Inicio</a>
      <a href="https://josegomezvillasclaras.github.io/TrabajoFinal1LM/Juego.html" class="btn">Un Juego</a>
      <a href="https://josegomezvillasclaras.github.io/TrabajoFinal1LM/ajustes.html" class="btn">Ajustes</a>
      <a href="https://josegomezvillasclaras.github.io/TrabajoFinal1LM/soldadito.xml" class="btn">XML</a>
      <button onclick="openModal()" class="btn">Modal</button>
    </div>
  </xsl:template>
			
	<xsl:template match="verso">
     <p>
     <xsl:value-of select="."/>
     </p>    
    </xsl:template>
			
</xsl:stylesheet>