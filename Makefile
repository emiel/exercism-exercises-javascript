clean:
	find $(CURDIR) -name node_modules -type d -depth 2 -exec rm -rf {} \;
