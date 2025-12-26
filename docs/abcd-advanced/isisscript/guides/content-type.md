---
sidebar_position: 8
title: Content Type
---

# Content type
Any CGI program must tell the server what kind of output it is trying to send back to the client. Normally this will be an HTML document, i.e. text/html (though it could be e.g. text/plain).

This information is sent as a header specifying the *"Content-type"* which must be followed by a blank line:

```xml
<display><pft>’Content-type: text/html’##</pft></display>
```

This statement must be written in the ISIS formatting language using `##` (or `/#`) to produce the blank line. (See [abc-of-cisis/cisis-fl/start.md](abc-of-cisis/cisis-fl/start.md)). You cannot use the HTML `<br>` element here because the server has not yet been told to expect HTML!

You can now put together a complete script:
```xml

<IsisScript name=Hello>
    <display><pft>’Content-type: text/html’##</pft></display>
    <display>Hello World!</display>
</IsisScript>

```

If you save this in a file called **hello.xis** in your **/cgi-bin** directory, you can try it out using the following web page:

```html

<HTML>
  <BODY>
    <A HREF=http://localhost/cgi-bin/wxis.exe/?IsisScript=hello.xis>Run Helloscript</A>
  </BODY>
</HTML>

```


