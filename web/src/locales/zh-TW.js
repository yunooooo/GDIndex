import $vuetify from 'vuetify/es5/locale/zh-Hant'

export default {
	fileName: '檔案名稱',
	modifiedTime: '修改時間',
	fileSize: '檔案大小',
	mainDrive: '主要硬碟',
	rootDir: '根目錄',
	search: '搜尋',
	save: '保存',
	cancel: '取消',
	close: '關閉',
	start: '開始',
	errorRetrievingFiles: '獲取檔案失敗',
	fileUpload: '檔案上傳',
	urlUpload: '從網址上傳',
	upload: '上傳',
	fileToUpload: '要上傳的檔案',
	uploading: '上傳中...',
	serverProcessing: '伺服器正在處理檔案',
	bigFileUploadWarning:
		'由於 CloudFlare Workers 的限制，上傳大檔案可能會隨機失敗',
	exportUrl: '導出下載鏈接',
	exportUrlIncludeSubFolders: '包含子檔案夾',
	exportUrlIncludeFileName: '導出檔案名',
	exportUrlFetchingFiles: '獲取檔案中，還剩 {remainingFolderCount} 個檔案夾',
	exportUrlFetchFileFailed: '獲取檔案失敗，原因：{reason}',
	exportUrlStats:
		'{folderCount} 個檔案夾，{fileCount} 個檔案，總大小 {totalDownloadSize}',
	aria2Download: '使用 Aria2 下載',
	aria2DownloadRecursive: '包含子檔案夾',
	aria2FetchingFiles:
		'正在獲取檔案，還剩 {remainingFolderCount} 個檔案夾待獲取',
	aria2DownloadStats:
		'將會下載 {folderCount} 個檔案夾中的 {fileCount} 個檔案，總計大小 {totalDownloadSize}',
	aria2DownloadProgress: '正在添加下載任務，還剩 {remainingFileCount} 個檔案',
	aria2DownloadSuccess: '已添加所有檔案下載',
	aria2DownloadFailed: '添加下載任務失敗，原因：{failReason}',
	aria2FetchFileFailed: '獲取檔案列表失敗，原因：{failReason}',
	aria2RPCSettings: 'Aria2 RPC 配置',
	aria2RPCHost: '主機',
	aria2RPCPort: '通訊埠',
	aria2RPCSecure: 'HTTPS',
	aria2RPCPath: '路徑',
	aria2RPCToken: '密碼',
	aria2RPCDownloadPath: '下載路徑',
	aria2TestConnection: '測試連接',
	aria2Testing: '正在嘗試連接',
	aria2TestFailed: '連接失敗，原因：{reason}',
	aria2TestSucceed: '連接成功，Aria2 版本：{version}',
	aria2HTTPSWarning: `你正在使用 HTTPS 訪問，但 aria2 請求仍然使用
	HTTP。由於瀏覽器的限制，aria2 的 HTTP 請求可能會被阻止。你可以使用
	HTTPS 請求 aria2，或者關閉瀏覽器的非安全內容阻攔。`,
	$vuetify
}
