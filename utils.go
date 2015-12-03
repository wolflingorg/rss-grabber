// Utils and Helpers
package main

// Check if string exists in slice
func stringInSlice(str string, list []string) bool {
	for _, v := range list {
		if v == str {
			return true
		}
	}
	return false
}
